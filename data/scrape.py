import requests as r
from bs4 import BeautifulSoup as bs
from random import randrange
import json
import datetime


# url = "https://www.simpleretro.com/collections/tops-0408"
# url = "https://www.simpleretro.com/collections/dresses"
# url = "https://www.simpleretro.com/collections/bottoms-0408"
# url = "https://www.simpleretro.com/collections/pullover"
url = "https://www.simpleretro.com/collections/coats"



def getHTML(URL):
    page = r.get(URL)
    return bs(page.content, 'html.parser')


def getProductLinks(page):
    product_links = []
    link_elements = page.find_all("a", class_="cd chp")[:16]
    for a in link_elements:
        product_links.append("https://www.simpleretro.com" + a["href"])
    return product_links


def getProductInfo(product, sku, title, cat):
    categories = []
    categories.append(cat)

    price = float(product.find("span", class_="money").text[1:])
    src = product.find("img", class_="t4s-img-noscript")["src"]

    sizes = []
    for size in product.find("div", {"data-opname": "size"}).find_all("span", class_="swatch__value_pr"):
        sizes.append(size.text.strip())

    info = []
    for td in product.find("table").find_all("td"):
        info.append(td.text.strip())

    colors = info[info.index("Color") + 1].split("/")
    if "Detail" in info:
        detail = info[info.index("Detail") + 1]
    elif "Details" in info:
        detail = info[info.index("Details") + 1]
    else:
        detail = "N/A"
    composition = info[info.index("Composition") + 1]
    care = info[-1]

    productInfo = {
        "sku": sku,
        "title": title,
        "categories": categories,
        "price": price,
        "qtyInStock": randrange(60),
        "src": src,
        "sizes": sizes,
        "colors": colors,
        "detail": detail,
        "composition": composition,
        "care": care,
        "createdAt": datetime.datetime.now().isoformat(),
    }

    return productInfo


all_product_info = []
# for url in urls:
category_page = getHTML(url)
product_links = getProductLinks(category_page)
for link in product_links:
    product = getHTML(link)

    sku = product.find("span", {"id": "pr_sku_ppr"}).text.strip()
    title = product.find("h1").text.strip().split("】")[-1]
    existed_index = -1
    for index, each_product in enumerate(all_product_info):
        if ((each_product["sku"] == sku) and (each_product["title"] == title)):
            existed_index = index
    
    url_cat = url.split("/")[4]
    cat = ""
    if url_cat == "coats":
        cat = "outerwear"
    elif url_cat == "pullover":
        cat = "knitwear"
    elif url_cat == "tops-0408":  
        cat = "tops"
    elif url_cat == "bottoms-0408":  
        cat = "bottoms"
    else:
        cat = "dresses"

    if (existed_index == -1):
        all_product_info.append(getProductInfo(product, sku, title, cat))
    else:
        all_product_info[index]["categories"].append(cat)


with open("data_outerwear.json", "w", encoding="utf-8") as file:
    json.dump(all_product_info, file, ensure_ascii=False, indent=4)




