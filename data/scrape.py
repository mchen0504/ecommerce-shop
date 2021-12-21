import requests as r
from bs4 import BeautifulSoup as bs

URL = "https://www.simpleretro.com/collections/knitwear/products/66025-ariana-iris-long-sleeves-pullover-knitwear-light-beige"

page = r.get(URL)
product = bs(page.content, 'html.parser')


#id
id = product.find("p", "product-single__sku").text.strip()
# title
title = product.find("h1").text.strip()
# category
categories = []
categories.append(URL.split("/")[4])
# price
price = product.find("span", class_="money").text[1:]
# src
src = product.find("div", class_="product-image-main").find("img")["data-photoswipe-src"][2:]


# sizes
sizes = []
sizeSet = product.find("fieldset", {"name" : "Size"}).findAll("div")
for size in sizeSet:
    sizes.append(size.text.strip())

# colors
colors=[]

color_name = ""
color_url = ""
color_backup = ""
colorSet = product.find("fieldset", {"name" : "Color"}).findAll("div")
for color in colorSet:
    color_name = color.text.strip()
    c = color.find("label")["style"]
    splits = c.split("; ")
    color_url = splits[0].split("(")[1].split(")")[0]
    color_backup = splits[1].split(": ")[1].split(";")[0]

    colors.append({"color_name": color_name, "color_url": color_url, "color_backup": color_backup})





# detail
# composition
# care
info = []
infoTds = product.find("table").findAll("td")
for td in infoTds:
    info.append(td.text.strip())

detail = info[(info.index("Detail") if "Detail" in info else info.index("Details")) + 1]
composition = info[info.index("Composition") + 1]
care = info[-1]






oneItem = {
    "id": id,
    "title": title,
    "categories": categories,
    "price": price,
    "src": src,
    "sizes": sizes,
    "colors": colors,
    "detail": detail,
    "composition": composition,
    "care": care
}

print(oneItem)


# quantity: randomly generate
# should I store all the ids in an array for easy checking? or directly check the id for each item