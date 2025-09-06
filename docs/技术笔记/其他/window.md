# Window

## 命令行

批处理 bat:

- [易百教程](https://www.yiibai.com/batch_script/batch_script_overview.html)
- [易百教程 - 常用命令列表](https://www.yiibai.com/batch_script/batch_script_commands.html#)

powershell:

- [易百教程](https://www.yiibai.com/powershell/)
- [微软教程](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.2)

## 注册表

注册表是 windows 系统中具有层次结构的核心数据库，储存的数据对 windows 和 Windows 上运行的应用程序和服务至关重要。
注册表是帮助 windows 控制硬件、软件、用户环境和 windows 界面的一套数据文件。

> [!NOTE] 启动方式
> Win + R 打开启动框，输入 regedit，点击运行

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
