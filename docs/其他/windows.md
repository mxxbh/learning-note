# Windows

## 命令行

> powershell 教程: [微软-What is PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.2)

## 注册表

注册表是 Windows 系统中具有层次结构的核心数据库，储存的数据对 Windows 和 Windows 上运行的应用程序和服务至关重要。
注册表是帮助 Windows 控制硬件、软件、用户环境和 Windows 界面的一套数据文件。

::: info 启动方式
Win + R 打开启动框，输入 regedit，点击运行
:::

### 编辑软件自启动

位置：

- 计算机\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
- 计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run

### 编辑右键菜单

位置：

- 计算机\HKEY_CLASSES_ROOT\Directory\Background\shell

| 数据项类型 | 名称     | 取值 | 功能                                  |
| ---------- | -------- | ---- | ------------------------------------- |
| 字符串值   | Extended |      | 按住 shift 键点击鼠标右键才出现在菜单 |
| 字符串值   | Icon     |      | 图标                                  |
