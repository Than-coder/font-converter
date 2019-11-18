const electron = require('electron');
const path = require('path');


const { app,BrowserWindow,Menu } = electron;

let mainWindow,aboutWindow;

// index window
function init(){
  mainWindow = new BrowserWindow({
    title:'Font Converter',
    icon:path.join(__dirname,'/icon/electron_4.png'),
    width: 700,
    height: 400,
    minWidth: 700,
    minHeight: 400,
    webPreferences:{
      nodeIntegration: true
    }
  })

  //load html
  mainWindow.loadFile(path.join(__dirname,'index.html'));
  // menu
  let menu = [
    {
      label:'File',
      submenu:[
        {
          label:'Exit',
          click(){
            app.quit();
          }
        }
      ]
    },
    {
      label:'View',
      submenu:[
        {role:'reload'},
        {role:'zoomin'},
        {role:'zoomout'},
        {role:'resetzoom'},
        {role:'togglefullscreen'}
      ]
    },
    {
      label:'About',
      click(){
        about();
      }
    }
  ];
  // build menu
  let buildMenu = Menu.buildFromTemplate(menu);
  //set menu
  Menu.setApplicationMenu(buildMenu);
  // index window when close
  mainWindow.on('close',()=> app.quit());
 
}

// electron app ready
app.on('ready',init);

//about window
function about(){
  aboutWindow = new BrowserWindow({
    title:'Font Converter',
    icon:path.join(__dirname,'/icon/electron_4.png'),
    width: 300,
    height: 250,
    minWidth: 300,
    minHeight: 250,
    maxWidth: 300,
    maxHeight: 250,
    webPreferences:{
      nodeIntegration: true
    }
  });
  // load about html
  aboutWindow.loadFile(path.join(__dirname,'about.html'));

}


