import requests as r
from bs4 import BeautifulSoup as bs
from random import randrange
import json

URL = "https://www.simpleretro.com/collections/knitwear"


def getHTML(URL):
    page = r.get(URL)
    return bs(page.content, 'html.parser')


def getProductLinks(page):
    product_links = []
    link_elements = page.find_all("a", class_="grid-product__link", href=True)[:12]
    for a in link_elements:
        product_links.append("https://www.simpleretro.com" + a["href"])
    return product_links


def getProductInfo(link):
    product = getHTML(link)
    id = product.find("p", class_="product-single__sku").text.strip()
    title = product.find("h1").text.strip().split("】")[-1]

    categories = []
    categories.append(URL.split("/")[4])

    price = product.find("span", class_="money").text[1:]
    src = product.find("div", class_="product-image-main").find("img")["data-photoswipe-src"][2:]

    sizes = []
    for size in product.find("fieldset", {"name" : "Size"}).find_all("div"):
        sizes.append(size.text.strip())

    colors = []
    colorSet = product.find("fieldset", {"name" : "Color"}).find_all("div")
    for color in colorSet:
        style = color.find("label")["style"]
        splits = style.split("; ")
        colors.append({
            "color_name": color.text.strip(),
            "color_url": splits[0].split("(")[1].split(")")[0],
            "color_backup": splits[1].split(": ")[1].split(";")[0]
        })

    info = []
    for td in product.find("table").find_all("td"):
        info.append(td.text.strip())

    detail = info[(info.index("Detail") if "Detail" in info else info.index("Details")) + 1]
    composition = info[info.index("Composition") + 1]
    care = info[-1]

    productInfo = {
        "id": id,
        "title": title,
        "categories": categories,
        "price": price,
        "quantity": randrange(60),
        "src": src,
        "sizes": sizes,
        "colors": colors,
        "detail": detail,
        "composition": composition,
        "care": care
    }

    return productInfo




category_page = getHTML(URL)
product_links = getProductLinks(category_page)
all_product_info = []
for product in product_links:
    all_product_info.append(getProductInfo(product))


data = {"products": all_product_info}

with open("data.json", "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

