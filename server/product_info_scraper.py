from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

import json

# configure Selenium
service = Service("path/to/chromedriver")
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # run Chrome in headless mode (without a GUI)
driver = webdriver.Chrome(service=service, options=options)

urls = [
        "https://www.nike.com/t/air-jordan-1-mid-womens-shoes-Kg3nnj/BQ6472-701"
    ]
data = []

def filter_category(str):
    if "Women" in str:
        return "Women"
    elif "Kids" in str:
        return "Kids"
    elif "Men" in str:
        return "Men"
    else:
        return None

for url in urls:
    driver.get(url)

    wait = WebDriverWait(driver, 10)
    wait.until(EC.presence_of_all_elements_located((By.TAG_NAME, "picture")))

    html = driver.page_source

    soup = BeautifulSoup(html, "html.parser")

    product = {}

    li_element = soup.find("li", {"class": "description-preview__style-color"})
    li_text = li_element.text.strip()
    product["sku"] = li_text.split(":")[1].strip()

    product["name"] = soup.find(id = "pdp_product_title").get_text()

    price_string = soup.find("div", {"class": "product-price css-11s12ax is--current-price css-tpaepq"}).get_text()
    price = float(price_string.replace("$", ""))
    product["price"] = price

    description = soup.find("div", {"class": "description-preview body-2 css-1pbvugb"}).find("p").get_text()
    product["description"] = description
    
    images = []

    divs = soup.find_all("div", {"class": "css-du206p"})
    for div in divs:
        pictures = div.find_all("picture")
        if len(pictures) >= 2:
            picture = pictures[1]
            source = picture.find("source", {"srcset": True})
            img_link = source["srcset"].split()[0]
            images.append(img_link)
    
    product["images"] = images

    style = soup.find("h2", {"class": "headline-5 pb1-sm d-sm-ib"}).get_text()
    product["category"] = filter_category(style)
    product["style"] = style

    product["isNew"] = False
    product["onSale"] = False
    product["isFeatured"] = False
    
    data.append(product)

with open("nike_products.json", "w") as f:
    json.dump(data, f, indent = 2)

driver.quit()


