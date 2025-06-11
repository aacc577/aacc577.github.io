# 🌐 科技博客 | Tech Blog
- 探索技术与创新的前沿，记录Web开发心得与前沿趋势
# 📖 项目概述
- 中文：  
这是一个基于HTML5、CSS3和JavaScript构建的个人科技博客，托管于GitHub Pages。博客设计融合现代科技美学与功能性，包含动态粒子背景、打字机标题效果及响应式布局，支持多设备访问。页面包含“首页”、“关于”和“博客”板块
- English:  
personal tech blog built with HTML5, CSS3, and JavaScript, hosted on GitHub Pages. Designed with a modern tech aesthetic and functional features, including dynamic particle backgrounds, typewriter title effects, and responsive layouts for multi-device access. The site includes three core sections: "Home", "About", and "Blog"
# 🛠️ 技术栈 (Tech Stack)
- **前端基础**：HTML5 / CSS3 / JavaScript
- **视觉特效**：[CSS动画 / 粒子背景](https://github.com/VincentGarreau/particles.js/) 
- **字体**：Google Fonts（Orbitron、Roboto）
- **图标**：Font Awesome 6  
- **部署平台**：GitHub Pages  
# 📂 文件结构
```
username.github.io/  
├── index.html                 # 主页面  
├── css/                       # 样式文件夹  
│   └── style.css              # 主样式文件  
├── js/                        # JavaScript文件夹  
│   ├── particles.js           # 粒子效果脚本  
│   ├── main.js                # 主逻辑脚本  
│   └── typing.js              # 打字机效果脚本  
├── images/                    # 图片资源  
│   └── placeholder.jpg        # 示例图片（需替换）  
└── assets/                    # 其他资源  
```
# 🚀 功能特点
- 动态粒子背景：鼠标悬停交互 + 粒子吸附效果（轻量级）  
- 打字机标题动画：首页标题轮播 + Logo逐字打印效果  
- 响应式设计：适配桌面、平板及移动端  
- 平滑滚动导航：点击导航栏快速定位内容  
- 滚动动画：内容渐入视差效果  
- 简约科技风UI：渐变色、浮动元素与微交互  
# 📝 内容板块
- 首页：动态标题 + 博客简介 + "阅读博客"按钮  
- 关于：个人简介 + 技术栈图标（HTML5/CSS3/JS）  
- 博客：三篇示例文章卡片（含图片、标题、摘要及链接）  
# 🛠️ 本地运行指南
克隆仓库到本地：  
```git
git clone https://github.com/yourusername/username.github.io.git
```
用浏览器直接打开 index.html 文件，或部署至GitHub Pages查看效果。  
注意：  
- 替换 images/placeholder.jpg 为您的实际图片  
- 更新示例文章中的链接为真实内容  
- 🌍 部署说明
将代码推送至 main 分支  
[访问](https://aacc577.github.io)即可查看在线版本  
🧩 自定义与扩展
修改颜色主题：调整 style.css 中的 :root CSS变量  
添加新文章：在 index.html 的博客板块复制卡片模板  
更换粒子效果：修改 js/particles.js 中的配置参数  
# ❓ 常见问题
- Q1: 页面加载时出现闪烁？  
A: 确保`style.css`已正确加载，检查控制台是否有CSS/JS报错。  
- Q2: 粒子动画卡顿？  
A: 减少`particles.js`中的`particles.number.value`数值（默认100）。  
- Q3: 如何更换博客文章链接？  
A: 直接编辑`index.html`中`<a href="...">`标签的URL地址。  
# 🤝 贡献指南
- 欢迎通过Pull Request提交改进：  
- Fork 仓库  
- 创建新分支
- `git checkout -b feature/your-feature`
- 提交修改
- `git commit -m "Add new feature"`
- 推送到分支
- `git push origin feature/your-feature`
- 发起
- `Pull Request`
- 注意：请遵循代码风格一致性，添加必要注释。  
# 📜 许可证
- MIT License © 2025 
- [保留所有权利](https://github.com/aacc577)
- 最后更新：2025年6月  
- 版本：v1.0.0  
- 文件：README.md