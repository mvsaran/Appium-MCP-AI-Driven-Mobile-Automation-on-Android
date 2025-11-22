# 🚀 Appium + MCP – AI-Driven Mobile Automation on Android

<div align="center">

![Appium Logo](https://img.shields.io/badge/Appium-663399?style=for-the-badge&logo=appium&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![TestNG](https://img.shields.io/badge/TestNG-FF6C37?style=for-the-badge&logo=testing-library&logoColor=white)

**Build once. Control everything with plain-English prompts.**

Appium + Model Context Protocol (MCP) + GitHub Copilot = an AI-assisted mobile automation lab, powered by native apps *and* mobile Chrome.

[Features](#-features) • [Architecture](#-architecture) • [Quick Start](#-quick-start) • [Documentation](#-table-of-contents)

</div>

---

## 🎯 Features

<table>
<tr>
<td width="50%">

### 🤖 AI-Powered Automation
- **Natural Language Control**: Drive mobile apps using plain English
- **GitHub Copilot Integration**: AI-assisted test generation
- **Intelligent Locator Discovery**: Auto-detect UI elements
- **Code Generation**: Automatically create Page Objects & tests

</td>
<td width="50%">

### 📱 Complete Mobile Testing
- **Native Android Apps**: Full UiAutomator2 support
- **Mobile Chrome**: Web automation on Android
- **Real Device & Emulator**: Works with both
- **E2E Workflows**: Login, checkout, search validation

</td>
</tr>
</table>

---

## 🎬 See It In Action

### 🔍 AI-Driven Element Discovery

The MCP server intelligently discovers and maps UI elements from your Android app:

*AI automatically identifies login fields, buttons, product cards, and checkout elements with stable content-desc locators*

---

### 🌐 Browser Automation Made Simple

Execute complex browser workflows with natural language commands:

*Search Google, verify results, and capture locators - all through conversational AI prompts*

---

### ✅ End-to-End Test Execution

Watch AI complete entire test flows from login to checkout:

*AI navigates the Swag Labs app, adds items to cart, and completes checkout - then generates the test code*

---

## 🏗 Architecture

```text
┌─────────────────────────────────────────────┐
│         VS Code + GitHub Copilot            │
│            (Agent Mode + MCP)               │
│  "Add two items to cart and checkout"       │
└────────────────┬────────────────────────────┘
                 │ MCP Protocol (stdio)
┌────────────────▼────────────────────────────┐
│         @gavrix/appium-mcp                  │
│       (Node.js MCP Server)                  │
│                                             │
│  • Reads capabilities.json                  │
│  • Exposes tools:                           │
│    - start_session                          │
│    - find_element                           │
│    - click, send_keys                       │
│    - get_page_source                        │
└────────────────┬────────────────────────────┘
                 │ WebDriver Protocol
┌────────────────▼────────────────────────────┐
│          Appium Server (v3+)                │
│       UiAutomator2 Driver                   │
└────────────────┬────────────────────────────┘
                 │ ADB
┌────────────────▼────────────────────────────┐
│      Android Emulator / Device              │
│                                             │
│  📱 Swag Labs App    🌐 Chrome Browser      │
└─────────────────────────────────────────────┘
```

---

## 📚 Table of Contents

- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Usage Examples](#-usage-examples)
- [Sample Use Cases](#-sample-use-cases)
- [Troubleshooting](#-troubleshooting)
- [Advanced Topics](#-advanced-topics)
- [Contributing](#-contributing)

---

## ✅ Prerequisites

### 🔧 Required Software

Before starting, ensure you have the following tools installed:

| Tool | Purpose | Installation |
|------|---------|--------------|
| ☕ **Java JDK** | Core programming language (11, 17, or 21) | [Download Oracle JDK](https://www.oracle.com/java/technologies/downloads/) / [Download OpenJDK](https://adoptium.net/) |
| 📦 **Maven** | Build automation & dependency management | [Download Maven](https://maven.apache.org/download.cgi) |
| 📝 **Node.js** | Runtime for Appium server (18+) | [Download Node.js](https://nodejs.org/) |
| 📱 **Appium Server** | Mobile test automation server (3.0+) | `npm install -g appium` |
| 🔧 **Appium UiAutomator2** | Android automation driver | `appium driver install uiautomator2` |
| 🔍 **Appium Inspector** | Element locator & inspector tool | [Download Appium Inspector](https://github.com/appium/appium-inspector/releases) |
| 🤖 **Android Studio** | Android SDK & emulator management | [Download Android Studio](https://developer.android.com/studio) |
| 💻 **VS Code** | IDE with Copilot & MCP support | [Download VS Code](https://code.visualstudio.com/) |
| 🤖 **GitHub Copilot** | AI code assistant (requires subscription) | [Install Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) |
| 📊 **Allure CLI** | Generate interactive test reports | `npm install -g allure-commandline` |

### 📥 Installation Steps

#### 1. Install Java JDK

```bash
# Verify Java installation
java -version

# Expected output:
# java version "17.0.x" or "11.0.x" or "21.0.x"
```

#### 2. Install Maven

```bash
# Verify Maven installation
mvn -version

# Expected output:
# Apache Maven 3.x.x
```

#### 3. Install Node.js & Appium

```bash
# Verify Node.js
node -v
npm -v

# Install Appium globally
npm install -g appium

# Install UiAutomator2 driver
appium driver install uiautomator2

# Verify Appium installation
appium -v

# Expected output: 3.x.x
```

#### 4. Set Up Android Studio

1. **Download & Install** Android Studio from [developer.android.com](https://developer.android.com/studio)
2. **Install SDK Components:**
   - Android SDK Platform-Tools
   - Android SDK Build-Tools
   - Android Emulator
   - Android SDK Platform (API 33 or higher)

3. **Create Android Virtual Device (AVD):**
   - Open Android Studio
   - Tools → Device Manager → Create Device
   - Choose device (e.g., Pixel 7)
   - Select system image (API 33+ recommended)
   - Finish and start emulator

### 🌍 Environment Variables (Windows)

```text
ANDROID_HOME = C:\Users\<YourName>\AppData\Local\Android\Sdk
JAVA_HOME    = C:\Program Files\Eclipse Adoptium\jdk-17
MAVEN_HOME   = C:\Program Files\Apache\maven

PATH += %ANDROID_HOME%\platform-tools
        %ANDROID_HOME%\tools
        %ANDROID_HOME%\emulator
        %JAVA_HOME%\bin
        %MAVEN_HOME%\bin
```

### 🍎 Environment Variables (Mac/Linux)

Add to your `~/.bash_profile` or `~/.zshrc`:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/emulator
```

Then reload:
```bash
source ~/.bash_profile  # or source ~/.zshrc
```

### ✅ Verification Checklist

Run these commands to verify your setup:

```bash
# Check Java
java -version          # Should show version 11, 17, or 21

# Check Maven
mvn -version           # Should show Apache Maven 3.x

# Check Node.js
node -v                # Should show v18.x or higher
npm -v                 # Should show v9.x or higher

# Check Appium
appium -v              # Should show 3.x or higher

# Check Android SDK
adb devices            # Should list connected devices/emulators

# Check emulator
emulator -list-avds    # Should list your virtual devices

# Check Allure (optional)
allure --version       # Should show allure 2.x
```

**Expected Output Example:**
```text
✅ java version "17.0.9"
✅ Apache Maven 3.9.5
✅ v18.18.0
✅ 9.8.1
✅ 3.0.1
✅ List of devices attached
   emulator-5554    device
✅ Pixel_7_API_33
✅ 2.24.0
```

---

## 🚀 Quick Start

### 1. Clone & Setup Project

```bash
# Clone repository
git clone <your-repo-url> AppiumProject
cd AppiumProject

# Create MCP server module
mkdir mcp-server
cd mcp-server
npm init -y
npm install @gavrix/appium-mcp --save-dev
cd ..
```

### 2. Configure Capabilities

Create `mcp-server/capabilities.json`:

```json
{
  "android": {
    "platformName": "Android",
    "appium:deviceName": "emulator-5554",
    "appium:automationName": "UiAutomator2",
    "appium:app": "C:\\apkfiles\\AndroidUI.apk",
    "appium:appPackage": "com.swaglabsmobileapp",
    "appium:appActivity": "com.swaglabsmobileapp.MainActivity",
    "appium:noReset": true
  },
  "androidBrowser": {
    "platformName": "Android",
    "appium:deviceName": "emulator-5554",
    "appium:automationName": "UiAutomator2",
    "appium:browserName": "Chrome",
    "appium:noReset": true,
    "appium:chromeOptions": {
      "args": [
        "--disable-fre",
        "--no-first-run",
        "--disable-popup-blocking"
      ]
    }
  }
}
```

### 3. Configure VS Code MCP

Create `.vscode/mcp.json`:

```json
{
  "servers": {
    "appium-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["@gavrix/appium-mcp"],
      "env": {
        "CAPABILITIES_CONFIG": "${workspaceFolder}/mcp-server/capabilities.json",
        "ANDROID_HOME": "${env:ANDROID_HOME}"
      }
    }
  }
}
```

### 4. Start Services

```bash
# Terminal 1: Start Android Emulator
emulator -avd <your-avd-name>

# Terminal 2: Start Appium Server
npx appium --address 0.0.0.0 --port 4723 --base-path /
```

### 5. Use Copilot Agent

Open **VS Code Copilot Chat** and try:

```text
Use the appium-mcp tools with the "android" capabilities.

1. Start a new session
2. Log in to Swag Labs with "standard_user" / "secret_sauce"
3. Add two products to cart
4. Complete checkout
5. Log the locators used
```

---

## 🗂 Project Structure

```text
AppiumProject/
├─ .vscode/
│  └─ mcp.json                    # MCP server configuration
│
├─ mcp-server/
│  ├─ package.json                # Node dependencies
│  ├─ capabilities.json           # Android app & browser configs
│  └─ node_modules/
│
├─ src/
│  ├─ main/java/
│  │  └─ utils/                   # Helper utilities
│  │
│  └─ test/java/
│     ├─ Base/
│     │  └─ BaseClass.java        # WebDriver setup
│     │
│     ├─ Pages/                   # Page Object Models
│     │  ├─ LoginPage.java
│     │  ├─ ProductsPage.java
│     │  ├─ CartPage.java
│     │  └─ CheckoutPages.java
│     │
│     └─ tests/                   # TestNG test classes
│        ├─ LoginTest.java
│        ├─ CartCheckoutTest.java
│        └─ GoogleSearchTest.java
│
├─ pom.xml                        # Maven dependencies
├─ testng.xml                     # TestNG suite configuration
└─ README.md                      # This file
```

---

## ⚙ Configuration

### Capabilities Explained

#### Native Android App Profile

```json
{
  "android": {
    "platformName": "Android",
    "appium:deviceName": "emulator-5554",        // Your device ID
    "appium:automationName": "UiAutomator2",     // Android automation
    "appium:app": "C:\\path\\to\\your.apk",      // APK path
    "appium:appPackage": "com.example.app",      // Package name
    "appium:appActivity": ".MainActivity",        // Launch activity
    "appium:noReset": true                       // Keep app state
  }
}
```

#### Chrome Browser Profile

```json
{
  "androidBrowser": {
    "platformName": "Android",
    "appium:deviceName": "emulator-5554",
    "appium:automationName": "UiAutomator2",
    "appium:browserName": "Chrome",              // Use Chrome
    "appium:chromeOptions": {
      "args": [
        "--disable-fre",                          // Skip first-run
        "--no-first-run",
        "--disable-popup-blocking"
      ]
    }
  }
}
```

---

## 💡 Usage Examples & Prompts

### 🌐 Example 1: Chrome Google Search (Browser Testing)

**Copy and paste this prompt into Copilot Chat:**

```text
Use the appium-mcp tools with the "androidBrowser" capabilities.

Steps:
1. Create a new session
2. Navigate to https://www.google.com
3. Locate the search box and type: Appium automation
4. Submit the search (tap enter or search button)
5. Verify at least one search result contains the word "Appium"
6. Return the locators used and a boolean result

Do not generate Java code yet — just perform the actions.
```

**Expected Output:**
- Session created with Chrome browser
- Navigation to Google completed
- Search executed successfully
- Results verified
- Locators returned (e.g., `input[name="q"]`, CSS selectors)

---

### 📱 Example 2: Swag Labs - Full Exploration & Test Plan Design

**Copy and paste this comprehensive prompt into Copilot Chat:**

```text
Use the appium-mcp tools with my existing Android Swag Labs capabilities from mcp-server/capabilities.json (the android profile) to explore the Swag Labs mobile app and design a full automation plan.

Goal: Open the Swag Labs app, perform a full cart checkout flow, and then propose how to implement it in Java + TestNG with Page Object Model. Do not generate any Java code yet – only describe steps, structure, and test plan.

Part 1 – Explore & document the app flow (using tools)

1. Start a new Android Appium session using the android capabilities.

2. On the Login screen, identify reliable locators for:
   - Username field
   - Password field
   - Login button

3. Log in with standard_user / secret_sauce.

4. On the Products screen, identify locators for:
   - Page title ("PRODUCTS" or equivalent)
   - Product items (name, price, add-to-cart button for at least 2 items)
   - Cart icon / cart badge

5. Add at least two items to the cart, then navigate to the Cart screen and capture locators for:
   - Cart item rows (name, price)
   - Remove button
   - Checkout button

6. Proceed to Checkout (Your Information) screen and identify locators for:
   - First name, Last name, Postal code fields
   - Continue button

7. Proceed to Checkout Overview screen and capture:
   - Line items and their prices
   - Subtotal / Tax / Total labels and values
   - Finish button

8. On the Checkout Complete screen, identify:
   - Confirmation message
   - Back Home button

For each screen, return:
- Screen name
- Key elements and their locators (id/accessibilityId/xpath)
- Any navigation assumptions (e.g., expected previous state)

Part 2 – Propose POM structure (no code, just design)

Based on what you found, propose a Page Object Model for my Java project.

Suggest page classes under package Pages, for example:
- LoginPage
- ProductsPage
- CartPage
- CheckoutInformationPage
- CheckoutOverviewPage
- CheckoutCompletePage

For each page, list:
- The main fields and actions it should expose (method names, e.g., login(username, password), addProductToCart(String productName), goToCart(), completeCheckout(...), etc.)
- Which locators (from Part 1) each method would use
- Assume I already have a BaseClass that manages driver setup/teardown; explain how each page will receive and use the driver

Part 3 – Propose TestNG test structure (still no code)

Design the TestNG test classes and test methods for a Swag Labs E2E cart checkout flow.

Suggest class and method names under package tests, for example:
- LoginTest
- CartCheckoutTest
- LogoutTest

For each test method, outline the exact high-level steps it will perform using the POM methods (e.g., "call loginPage.login(...) → productsPage.addProductToCart(...) → cartPage.verifyItems(...) → …").

Identify which assertions should be made at each stage, such as:
- Successful login (Products page visible)
- Correct items and prices in cart
- Correct totals (subtotal vs sum of items)
- Successful checkout completion message

Mention how TestNG groups (e.g., @Test(groups = {"smoke"}), {"regression"}) could be organized for these tests.

Part 4 – Full test plan summary

Finally, summarize the overall test plan for Swag Labs mobile E2E using Appium + Java + TestNG + POM:
- Scope of coverage for the cart checkout flow
- Additional scenarios to add later (negative login, remove item from cart, failed payment edge cases, etc.)
- Any risks or flakiness you foresee (locators, timing, network) and how you recommend handling them

Important: In this answer, do not output any Java code. Only describe the locators you used, the POM design, the TestNG test structure, and the test plan in detail. I will ask for concrete Java code later.
```

**Expected Output:**
- Complete exploration of all Swag Labs screens
- Detailed locator mapping for every element
- POM architecture design (6 page classes)
- TestNG test structure proposal
- Comprehensive test plan with risk assessment

---

### 🔄 Example 3: Generate Test Code (After Exploration)

**After running Example 2, use this prompt:**

```text
Based on the Swag Labs exploration we just completed:

1. Generate a complete Java TestNG test class for the cart checkout flow
2. Use my BaseClass.java for driver setup/teardown
3. Implement all Page Object classes you proposed:
   - LoginPage
   - ProductsPage
   - CartPage
   - CheckoutInformationPage
   - CheckoutOverviewPage
   - CheckoutCompletePage
4. Follow POM best practices:
   - PageFactory with @FindBy annotations
   - Separate locators from actions
   - Reusable methods
5. Add proper assertions at each step
6. Include TestNG annotations and groups
7. Add proper waits (WebDriverWait)

Generate the complete code now.
```

---

### 🔍 Example 4: Element Discovery & Analysis

```text
Use the appium-mcp tools with the "android" capabilities.

1. Start a new session on the current screen
2. Dump the entire UI hierarchy
3. For each clickable element, show:
   - resource-id
   - content-desc
   - text attribute
   - bounds/coordinates
   - clickable status
4. Suggest which locator strategy is most stable for each element
5. Identify any elements that might cause flakiness

Do not generate code - just provide the analysis.
```

---

### 📊 Example 5: Data-Driven Testing Setup

```text
Use the appium-mcp tools to help design a data-driven login test.

1. Explore the login screen locators
2. Propose a TestNG DataProvider structure with multiple test users:
   - standard_user (valid)
   - locked_out_user (should fail)
   - problem_user (valid but may have issues)
   - performance_glitch_user (valid)
3. Design the test method signature
4. Describe expected behavior for each user type
5. Suggest assertions for each scenario

Then generate the complete Java code with DataProvider.
```

---

### 🎯 Quick Testing Prompts

#### Start a Browser Session
```text
Use appium-mcp with "androidBrowser" to open Chrome and navigate to https://appium.io. Return the page title.
```

#### Take Screenshot
```text
Use appium-mcp with "android" to take a screenshot of the current screen and save it.
```

#### Check App State
```text
Use appium-mcp to check if Swag Labs app is running. If not, launch it and return to login screen.
```

#### Verify Element Exists
```text
Use appium-mcp to verify the login button exists on screen. Return its content-desc and resource-id.
```

---

## 🧪 Sample Use Cases

### 1️⃣ Native App Testing: Swag Labs E2E

**Workflow:**
```
Login → Browse Products → Add to Cart → Checkout Info → 
Review Order → Complete Purchase → Verify Confirmation
```

**AI Capabilities:**
- ✅ Auto-discover stable `content-desc` locators
- ✅ Generate Page Object Model structure
- ✅ Create TestNG test classes with assertions
- ✅ Handle dynamic elements (cart badge, item counts)

**Key Locators Discovered:**
- Login: `test-Username`, `test-Password`, `test-LOGIN`
- Products: `test-PRODUCTS`, `test-Item`, `test-ADD TO CART`
- Cart: `test-Cart`, `test-CHECKOUT`
- Checkout: `test-First Name`, `test-Last Name`, `test-Zip/Postal Code`

---

### 2️⃣ Browser Testing: Google Search Validation

**Workflow:**
```
Launch Chrome → Open Google → Search Query → 
Verify Results → Extract Locators
```

**AI Capabilities:**
- ✅ Handle Chrome first-run dialogs
- ✅ Switch to WEBVIEW context automatically
- ✅ Use web locators (CSS, XPath)
- ✅ Validate search results programmatically

**Context Switching:**
```java
Set<String> contexts = driver.getContextHandles();
driver.context("WEBVIEW_chrome");  // Switch to web view
```

---

### 3️⃣ Exploratory Testing

**Use AI to analyze app structure:**

```text
Use appium-mcp to:

1. Start session on current screen
2. Dump all clickable elements
3. For each element, show:
   - resource-id
   - content-desc
   - text
   - bounds
4. Suggest which locators are most stable
```

**Output helps you:**
- 🎯 Choose best locator strategy
- 🎯 Identify flaky elements early
- 🎯 Design robust Page Objects

---

## 🧯 Troubleshooting

<details>
<summary><b>❌ "Could not connect to Appium server"</b></summary>

**Causes:**
- Appium server not running
- Wrong host/port/path configuration

**Solutions:**
```bash
# Start Appium with correct settings
npx appium --address 0.0.0.0 --port 4723 --base-path /

# Verify it's running
curl http://localhost:4723/status
```

For Appium Inspector:
- Host: `127.0.0.1`
- Port: `4723`
- Path: `/`

</details>

<details>
<summary><b>❌ "No route found for /session" or POST /session 404</b></summary>

**Cause:** Path mismatch (Appium v1 vs v2/3 style)

**Solution:**
```bash
# Use Appium 2/3 with root path
npx appium --base-path /

# NOT /wd/hub (legacy)
```

</details>

<details>
<summary><b>❌ "Invalid or unsupported WebDriver capabilities"</b></summary>

**Cause:** Empty or malformed capabilities object

**Solutions:**
- Verify `capabilities.json` syntax
- Check `CAPABILITIES_CONFIG` path in `mcp.json`
- Ensure profile name matches (e.g., `"android"`)

</details>

<details>
<summary><b>❌ Chrome "Make Chrome your own" popup</b></summary>

**Solutions:**

1. **Use chromeOptions flags:**
```json
"appium:chromeOptions": {
  "args": [
    "--disable-fre",
    "--no-first-run",
    "--disable-popup-blocking"
  ]
}
```

2. **Manual setup:**
- Tap through first-run once
- Keep `"appium:noReset": true`

</details>

<details>
<summary><b>❌ Stylus/Handwriting tutorial overlay</b></summary>

**Solutions:**
- Disable in Gboard settings: `Handwriting → OFF`
- Or handle programmatically:
```java
if (driver.findElements(By.xpath("//*[contains(@text,'stylus')]")).size() > 0) {
    driver.findElement(By.id("android:id/button2")).click(); // Cancel
}
```

</details>

<details>
<summary><b>❌ "adb: device offline"</b></summary>

**Solutions:**
```bash
# Restart ADB
adb kill-server
adb start-server
adb devices

# Restart emulator if needed
```

</details>

---

## 🎓 Advanced Topics

### Multi-Profile Testing

Create additional profiles for different scenarios:

```json
{
  "android_debug": { ... },
  "android_release": { ... },
  "android_tablet": { ... },
  "chrome_incognito": { ... }
}
```

Switch profiles in prompts:
```text
Use the "android_tablet" capabilities...
```

---

### CI/CD Integration

**GitHub Actions Example:**

```yaml
name: Mobile Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Android SDK
        uses: android-actions/setup-android@v2
      
      - name: Start Emulator
        run: |
          $ANDROID_HOME/emulator/emulator -avd test_avd -no-window &
          adb wait-for-device
      
      - name: Start Appium
        run: |
          npm install -g appium
          appium driver install uiautomator2
          appium &
      
      - name: Run Tests
        run: mvn clean test
```

---

### Reporting Integration

**Add Allure Reporting:**

```xml
<!-- pom.xml -->
<dependency>
    <groupId>io.qameta.allure</groupId>
    <artifactId>allure-testng</artifactId>
    <version>2.24.0</version>
</dependency>
```

```bash
# Generate report
mvn clean test
allure serve allure-results
```

---

## 🔮 Next Ideas

- [ ] **Parallel Execution**: Run tests on multiple devices
- [ ] **Cloud Testing**: Integrate BrowserStack / Sauce Labs
- [ ] **Visual Testing**: Add Applitools Eyes
- [ ] **Performance**: Measure app launch time, response
- [ ] **Accessibility**: Validate content-desc, talkback
- [ ] **Negative Scenarios**: Test error handling, edge cases
- [ ] **API Integration**: Combine API + UI tests
- [ ] **Multi-MCP Setup**: Chain multiple MCP servers

---

## 📖 Learning Tutorials

### Video Tutorials

#### 🎥 Official Project Walkthrough
[![Appium + MCP Tutorial](https://img.shields.io/badge/YouTube-Watch%20Tutorial-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/watch?v=jgwNTCuCk9E&t=78s)

**What you'll learn:**
- Complete setup walkthrough
- Real-time demonstration of MCP + Appium integration
- Tips and best practices from the creators
- Troubleshooting common issues

---

### Step-by-Step Learning Path

<table>
<tr>
<td width="33%" valign="top">

#### 🌱 **Beginner Track**

**Week 1: Foundations**
- [ ] Install Java, Node.js, Android Studio
- [ ] Set up Appium & UiAutomator2
- [ ] Configure environment variables
- [ ] Create first Android emulator

**Week 2: Basic Automation**
- [ ] Write first Appium test
- [ ] Understand locator strategies
- [ ] Practice with Appium Inspector
- [ ] Complete simple login test

**Resources:**
- [Appium Docs](https://appium.io/docs/en/latest/)
- [Android Developer Guides](https://developer.android.com/)

</td>
<td width="33%" valign="top">

#### 🚀 **Intermediate Track**

**Week 3: MCP Integration**
- [ ] Install @gavrix/appium-mcp
- [ ] Configure capabilities.json
- [ ] Set up VS Code MCP
- [ ] Enable GitHub Copilot Agent

**Week 4: Page Object Model**
- [ ] Design POM architecture
- [ ] Create reusable page classes
- [ ] Implement TestNG tests
- [ ] Add assertions & validations

**Resources:**
- [MCP Documentation](https://modelcontextprotocol.io/)
- [TestNG Tutorial](https://testng.org/doc/documentation-main.html)

</td>
<td width="33%" valign="top">

#### 💎 **Advanced Track**

**Week 5: AI-Driven Testing**
- [ ] Master natural language prompts
- [ ] Auto-generate test code
- [ ] Optimize locator strategies
- [ ] Handle dynamic elements

**Week 6: Production Ready**
- [ ] Set up CI/CD pipelines
- [ ] Integrate reporting (Allure)
- [ ] Parallel test execution
- [ ] Cloud device testing

**Resources:**
- [GitHub Actions Docs](https://docs.github.com/actions)
- [Allure Framework](https://docs.qameta.io/allure/)

</td>
</tr>
</table>

---

### 📚 Recommended Resources

#### Official Documentation
| Resource | Description | Link |
|----------|-------------|------|
| **Appium Docs** | Complete Appium documentation | [appium.io/docs](https://appium.io/docs) |
| **MCP Specification** | Model Context Protocol spec | [modelcontextprotocol.io](https://modelcontextprotocol.io) |
| **UiAutomator2** | Android automation driver | [github.com/appium/appium-uiautomator2-driver](https://github.com/appium/appium-uiautomator2-driver) |
| **TestNG Guide** | Testing framework documentation | [testng.org](https://testng.org) |

#### Community Resources
- **Appium Discuss Forum**: [discuss.appium.io](https://discuss.appium.io)
- **Stack Overflow**: Tag `[appium]` for questions
- **Appium GitHub**: [github.com/appium/appium](https://github.com/appium/appium)
- **Reddit Community**: [r/QualityAssurance](https://reddit.com/r/QualityAssurance)

#### Blogs & Articles
- 📝 [Appium Pro Tips](https://appiumpro.com/) - Advanced techniques
- 📝 [Test Automation University](https://testautomationu.applitools.com/) - Free courses
- 📝 [Ministry of Testing](https://www.ministryoftesting.com/) - Testing community

---

### 🎯 Hands-On Practice Exercises

#### Exercise 1: Basic App Testing
```text
Objective: Master basic Appium commands

Tasks:
1. Launch the sample app
2. Find and click 3 different elements
3. Input text into a field
4. Verify element visibility
5. Take a screenshot

Expected Time: 30 minutes
```

#### Exercise 2: MCP + AI Integration
```text
Objective: Use AI to generate test code

Tasks:
1. Use Copilot to explore app structure
2. Ask AI to identify all clickable elements
3. Generate a login test using natural language
4. Have AI create a Page Object Model
5. Run the generated test

Expected Time: 45 minutes
```

#### Exercise 3: E2E Flow Automation
```text
Objective: Automate complete user journey

Tasks:
1. Map out Swag Labs checkout flow
2. Use MCP to discover all locators
3. Generate complete test suite with AI
4. Add assertions at each step
5. Implement TestNG data providers

Expected Time: 90 minutes
```

---

### 🏆 Certification & Skills Validation

**Skills Checklist:**

- [ ] **Environment Setup** (Java, Node.js, Android SDK, Appium)
- [ ] **Appium Basics** (Sessions, locators, interactions)
- [ ] **MCP Integration** (Server setup, capabilities config)
- [ ] **AI-Assisted Testing** (Natural language prompts, code generation)
- [ ] **Page Object Model** (Design patterns, reusability)
- [ ] **TestNG Framework** (Annotations, assertions, data providers)
- [ ] **CI/CD Integration** (GitHub Actions, Jenkins)
- [ ] **Reporting** (Allure, ExtentReports)
- [ ] **Troubleshooting** (Debugging, logs analysis)
- [ ] **Best Practices** (Code quality, maintainability)

---

### 💬 Get Help & Support

**Stuck? Here's how to get help:**

1. **Check Troubleshooting Section** - Common issues solved
2. **Review Documentation** - Official guides first
3. **Search GitHub Issues** - Someone may have faced it
4. **Ask the Community** - Appium forum, Stack Overflow
5. **Open an Issue** - Provide logs, screenshots, code

**When asking for help, include:**
- ✅ Appium version (`appium -v`)
- ✅ Node.js version (`node -v`)
- ✅ Device/Emulator details
- ✅ Complete error message & stack trace
- ✅ Relevant code snippet
- ✅ Steps to reproduce

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Appium Team** - Mobile automation framework
- **@gavrix** - appium-mcp MCP server implementation
- **Anthropic** - Model Context Protocol specification
- **GitHub** - Copilot AI assistant

---

<div align="center">

### 🚀Author

Saran Kumar

Made with ❤️ by the Mobile Automation Community

</div>
