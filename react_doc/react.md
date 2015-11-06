## React分享 

####一.基本概念
1. React仅仅是UI，许多人使用React作为MVC架构的V层。尽管React并没有假设过开发者使用的其余技术栈，但它仍可以作为一个小特征轻易地在已有项目中使用。  
2. React为了更高超的性能而使用虚拟DOM作为其不同的实现。
3. React实现了单向响应数据流，从而减少了重复代码，这也是它为什么比传统数据绑定简单的原因。  

####二.开发工具与安装
#####1.开发工具
* IDE：Intellij IDEA Ultimate / Sublime / 普通记事本。  
* 插件：Emmet（可以不安装），方便HTML代码编写。  
* 必要工具：Node.js（包含npm），npm是比较常用的前端包管理命令，包含在Node.js环境中，今后很多工具需要使用npm下载。建议安装最新版Node.js，安装完成后，npm的使用环境也就建好了。

#####2.安装
请到各个官网查看以上三个开发工具在不同平台上的安装方式。
####三.基本用法与Demo
请至 <https://github.com/wudayu/react_practice>下载查看四个React代码实例。  
阅读代码时，请注意以下几点：    

* render方法中的return后面在同一行，必需有元素，并且只能有一个元素。所以有两种返回的代码格式的写法。  
* 在元素表达式中，不要使用If-Else语句块，使用三目运算符BOOL?A:B代替。
* 引用正确的JS文件。
* 将需要绘制的图形注入控件的位置。
* Jsx代码的编写与使用。

######预编译JSX
浏览器中的JSX转换器(JSXTransformer)是相当大的，并且会在客户端导致无谓的计算，这些计算是可以避免的。所以不要在生产环境使用JSXTransformer。  
我们可以通过使用一些工具（jsx），来自动生成编译后的js文件。  
  
1. 首先使用 npm install -g react-tools 命令来安装命令行工具jsx。
2. 以下面这个项目举例说明。项目中Calculator.html是主界面。js文件夹中是react的库，一般只会用到react.min.js文件。src文件夹中的js文件是开发者编写的，涉及到jsx语法的js文件。lib文件夹下是通过jsx工具编译的通用js文件。  
  ![](./01_project.png =250x "项目结构")    
3. 下图是使用了React的网页文件，注意到，这里没有引用JSXTransformer.js文件。并且在引入具体的业务js时，并没有引入我们手动编写的src目录中的包含jsx语法的js文件。  
  ![](./02_html.png =400x "React网页")  
4. 之所以不直接引用我们手写的含有jsx语法的js文件，是因为我们通过工具直接生成编译后的js文件。在这个项目中，src文件夹是含有jsx语法的js的文件夹，lib是用来存放编译完成后的js的文件夹，目前而言，lib目录中是空的。我们可以通过一条jsx命令（jsx --watch src/ lib/）来监视src文件夹，只要src文件夹中的js有被修改，则会立刻编译对应的纯js代码到lib目录中，并且文件名一一对应。如下图：  
  ![](./03_dir.png =400x)  
5. 之后就会发现lib中会自动生成同文件名的文件。同时，只要开发者一旦保存src目录中的修改，lib中的文件就会立刻重新编译。所以我们在正式的html代码中只需引入lib文件夹中的js文件即可。  
  ![](./04_generated.png =250x)
  
####四.技术对比
对比现在开源社区，一般会拿来和React进行比较的就是Angular。  
  
		相比之下Angular是一套完整的框架（M和V层），借鉴了很多后端的概念，熟悉服务器端MVC的工程师上手会很快。Angular适合较大规模的业务系统，水平一般的大团队使用Angular做项目会很舒服，前提是团队有对Angular比较深入了解的人。    

		React更关注UI的组件化（只有V层），和数据的单向更新，React提供了Virtual DOM，由于它是在内存中而不是在实际页面里实现DOM，所以开发效率上有些优势，前提是你要适应React的开发方式。  

		在移动框架方面，Ionic+Cordova+AngularJs使用的是App常规的WebView套一个App的壳。而React Native生成的App不是运行在WebView上，是系统原生的UI，React通过jsx生成系统原生的UI，iOS和Android的React UI组件还是比较相似的，大量代码可以复用。
