**Project Overview**
- **Name**: Appium Mobile Automation Framework with Allure Reporting
- **Purpose**: A TestNG/Maven-based mobile automation framework that runs Appium tests against Android emulators/devices and browser sessions, collects results and generates Allure reports. It also includes a lightweight MCP (Mobile Control Plane) server folder (`mcp-server/`) with helper scripts for flows and session checks.

**What's Implemented**
- **Test framework**: Java + TestNG with Maven (`pom.xml`, `testng.xml`).
- **Allure reporting**: Test results are saved to `allure-results/` and a generated report appears in `allure-report/`.
- **MCP server**: `mcp-server/` contains scripts for running automation flows and helper utilities such as `run_flow.js` and `check_login.js`.
- **Capabilities file**: `mcp-server/capabilities.json` holds common capability sets used by the MCP/server scripts.

**MCP Server Configuration**
- **Location**: `mcp-server/`
- **Purpose**: Provide reusable session flows, capability templates, and simple endpoints/scripts to create Appium sessions and orchestrate steps from Node.js or shell.
- **Key scripts**:
  - `mcp-server/run_flow.js` — main flow runner (used in the project context).
  - `mcp-server/check_login.js` — example script to validate a login flow or connectivity.
  - `mcp-server/capabilities.json` — capability templates used to create sessions.

**Capabilities Summary**
- Two example capability templates exist in `mcp-server/capabilities.json`:
  - `android`: native app testing. Key fields:
    - `platformName`: `Android`
    - `appium:deviceName`: `emulator-5554` (example)
    - `appium:automationName`: `UiAutomator2`
    - `appium:app`: `C:\\apkfiles\\AndroidUI.apk` (local APK path)
    - `appium:appPackage` and `appium:appActivity`
    - `appium:noReset`: `true`
  - `androidBrowser`: Chrome browser automation on Android. Key fields:
    - `platformName`: `Android`
    - `appium:browserName`: `Chrome`
    - `appium:chromeOptions.args`: useful flags to reduce first-run dialogs and popups.

**Primary Use Cases**
- Local Android emulator or real-device native app automation (smoke/regression tests).
- Android browser automation (mobile Chrome) for web app flows.
- Running orchestrated flows from Node/JS scripts that create sessions and execute steps.
- Collecting test results and producing Allure test reports for CI or local inspection.

**Deliverables (what's in the repo)**
- **Test & build**: `pom.xml`, `testng.xml` (Maven + TestNG configuration).
- **Tests**: `src/` (test sources and page objects — check your `src` folder for details).
- **MCP server**: `mcp-server/` (capabilities and helper scripts).
- **Allure artifacts**: `allure-results/` (raw results), `allure-report/` (generated report files and static web UI).
- **Sample dumps & artifacts**: `window_dump.xml`, previous test `allureReports.xml` etc.

**Prerequisites**
- Java + Maven (for running TestNG tests): ensure `mvn` is on PATH.
- Node.js (for MCP scripts) and npm (if you run `npx` commands).
- Appium server installed and running (Appium CLI, Desktop or server on `127.0.0.1:4723`).
- Android SDK and `adb` on PATH; an emulator or device connected.
- The APK referenced in `mcp-server/capabilities.json` exists at the path or update it.

**How to run (example steps)**
- Start an Android emulator or connect a device. Confirm with:
  - `adb devices`
- Start Appium server (one option):
  - From PowerShell: `appium` (or run Appium Desktop and start server)
- Start the MCP flow (examples from this repo):
  - Using the included Node script:
    - `node .\mcp-server\run_flow.js`
  - Or run an NPM tool if present in the project:
    - `npx @gavrix/appium-mcp` (project context shows this was used previously)
- Example: create a session via PowerShell (this pattern is used in repo context):
```
$body = '{"capabilities":{"firstMatch":[{"platformName":"Android","appium:deviceName":"emulator-5554","appium:automationName":"UiAutomator2","appium:app":"C:\\apkfiles\\AndroidUI.apk","appium:appPackage":"com.swaglabsmobileapp","appium:appActivity":"com.swaglabsmobileapp.MainActivity","appium:noReset":true}]}}'
Invoke-RestMethod -Method Post -Uri 'http://127.0.0.1:4723/session' -Body $body -ContentType 'application/json'
```
- Launch Chrome on emulator using `adb` (example):
  - `adb -s emulator-5554 shell am start -a android.intent.action.VIEW -d "https://www.google.com" com.android.chrome`

**Running tests (Maven/TestNG + Allure)**
- From project root run tests with Maven:
  - `mvn test`
- Generate/serve Allure report (if `allure` CLI is installed):
  - `allure serve allure-results`  (this starts a local HTTP server showing the report)

**Troubleshooting**
- Appium refused session / connection errors:
  - Ensure Appium is running on `127.0.0.1:4723` and no port conflicts.
- Emulator/device not found:
  - Confirm `adb devices` shows `emulator-5554` (or update deviceName in `capabilities.json`).
- APK path invalid:
  - Update `appium:app` in `mcp-server/capabilities.json` to point to a valid local APK.
- Browser automation issues:
  - Ensure Chrome exists on the emulator. Use `adb -s <device> shell pm list packages | grep chrome`.
- Permission / adb problems on Windows:
  - Restart ADB server: `adb kill-server; adb start-server` (PowerShell: use `;` to chain)

**Where to look for outputs & logs**
- Allure raw results: `allure-results/`
- Generated report (static site): `allure-report/`
- MCP server scripts / logs: `mcp-server/`
- Test reports and TestNG output: `test-output/`

**Next steps & suggestions**
- Verify and update the APK path in `mcp-server/capabilities.json` to a valid file on your machine.
- Start Appium and an emulator, then run `node .\mcp-server\run_flow.js` to exercise flows.
- Run `mvn test` to execute TestNG tests and `allure serve allure-results` to view the report.

**Contact / Author**
- Repository owner: `mvsaran` (local user: `mvsar`).
- If you want, I can also: run a test, update the `capabilities.json` to match your device, or add a sample `README` section with CI steps.
