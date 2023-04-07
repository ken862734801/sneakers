from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

# specify the URL you want to scrape
url = "https://www.nike.com/t/air-force-1-lv8-big-kids-shoes-1lGPrs/FD1035-100"

# configure Selenium
service = Service("path/to/chromedriver")
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # run Chrome in headless mode (without a GUI)
driver = webdriver.Chrome(service=service, options=options)

# load the web page using Selenium
driver.get(url)

# wait for the JavaScript to finish executing and update the HTML content
wait = WebDriverWait(driver, 10)
wait.until(EC.presence_of_element_located((By.TAG_NAME, "picture")))

# extract the updated HTML content
html = driver.page_source

# create a BeautifulSoup object to parse the HTML content
soup = BeautifulSoup(html, "html.parser")

# find all divs with class name "css-du206p"
divs = soup.find_all("div", {"class": "css-du206p"})

# loop through each div and extract the image link from the second <picture> tag
for div in divs:
    # find all <picture> tags within the current div
    pictures = div.find_all("picture")
    if len(pictures) >= 2:
        # get the second <picture> tag
        picture = pictures[1]
        # find the <source> tag with the "srcset" attribute
        source = picture.find("source", {"srcset": True})
        # extract the image link from the "srcset" attribute value
        image_link = source["srcset"].split()[0]
        print(image_link)

# quit the web driver
driver.quit()