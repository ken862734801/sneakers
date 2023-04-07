import requests
from bs4 import BeautifulSoup

import json


urls = [
        "https://www.nike.com/t/air-force-1-lv8-big-kids-shoes-1lGPrs/FD1035-100"
       ]

data_list = []

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
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    product = {}

    li_element = soup.find("li", class_="description-preview__style-color")
    li_text = li_element.text.strip()
    product["sku"] = li_text.split(":")[1].strip()

    product["name"] = soup.find(id = "pdp_product_title").get_text()

    price_string = soup.find("div", class_="product-price css-11s12ax is--current-price css-tpaepq").get_text()
    price_number = float(price_string.replace("$", ""))
    product["price"] = price_number

    divs = soup.find_all("div", {"class": "css-du206p"})

    images = []

    for div in divs:
        picture_tags = div.find_all("picture")
        print(picture_tags)
#         if len(picture_tags) >= 2:
#             second_picture = picture_tags[1]
#             source_tag = second_picture.find("source")
#             if source_tag is not None:
#                 images.append(source_tag["srcset"])
    
#     product["images"] = images

#     product["description"] = soup.find("div", class_="description-preview body-2 css-1pbvugb").find("p").get_text()

#     style_string = soup.find("h2", class_="headline-5 pb1-sm d-sm-ib").get_text()
#     category_string = filter_category(style_string)

#     product["category"] = category_string
#     product["style"] = style_string

#     # divs = soup.find_all("div", {"class": "css-du206p"})


#     data_list.append(product)

# with open("nike_products.json","w") as f:
#     json.dump(data_list, f, indent = 2)