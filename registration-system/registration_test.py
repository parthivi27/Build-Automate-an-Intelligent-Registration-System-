from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("http://127.0.0.1:5500/index.html")

print("URL:", driver.current_url)
print("Title:", driver.title)


time.sleep(2)
driver.find_element(By.ID, "fname").send_keys("Parthivi")
driver.find_element(By.ID, "phone").send_keys("9579751575")
driver.find_element(By.ID, "password").send_keys("Pa@270504")
driver.find_element(By.ID, "confirm").send_keys("Pa@270504")
driver.find_element(By.ID, "terms").click()
driver.find_element(By.ID, "submitBtn").click()
driver.find_element(By.ID, "submitBtn").click()
driver.find_element(By.ID, "lname").send_keys("Singh")
driver.find_element(By.ID, "email").send_keys("singhparthivi02@gmail.com")
driver.find_element(By.ID, "submitBtn").click()
driver.save_screenshot("success-state.png")


time.sleep(2)
driver.save_screenshot("error-state.png")

driver.quit()