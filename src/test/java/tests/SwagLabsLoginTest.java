package tests;

import Base.BaseClass;
import io.appium.java_client.MobileBy;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class SwagLabsLoginTest extends BaseClass {

    @BeforeClass
    public void setUp() {
        loadConfig();
        startServer();
        initializeDriver();
        waitForAppToLoad();
    }

    @Test(description = "Login to SwagLabs with standard_user")
    public void loginTest() {
        WebElement userField = driver.findElement(MobileBy.AccessibilityId("test-Username"));
        userField.sendKeys("standard_user");

        WebElement passField = driver.findElement(MobileBy.AccessibilityId("test-Password"));
        passField.sendKeys("secret_sauce");

        WebElement loginBtn = driver.findElement(MobileBy.AccessibilityId("test-LOGIN"));
        loginBtn.click();

        // Basic verification: after login, inventory screen should be present
        boolean loggedIn = driver.findElements(MobileBy.AccessibilityId("test-Products")).size() > 0
                || driver.findElements(MobileBy.id("com.swaglabsmobileapp:id/product_list")).size() > 0;

        Assert.assertTrue(loggedIn, "Login failed or inventory screen not found");
    }

    @AfterClass
    public void tearDownTest() {
        tearDown();
    }
}
