import { QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QSlider, Orientation } from '@nodegui/nodegui';

const win = new QMainWindow();
win.setWindowTitle("NodeGUI QSlider bug demo");

const centralWidget = new QWidget();
centralWidget.setObjectName("root");
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);

const label = new QLabel();
label.setObjectName("label");
label.setText("Steps to reproduce:\n1. Click the 'Set random slider value' button a few times\n2. Drag the slider knob using a mouse to a different position\n3. Click the button again. The slider will not be updated anymore.");

const slider = new QSlider();
slider.setObjectName("slider");
slider.setTracking(true);
slider.setValue(50);
slider.setOrientation(Orientation.Horizontal);

const button = new QPushButton();
button.setObjectName("button");
button.setText("Set random slider value");
button.addEventListener("clicked", () => {
  const randomValue = Math.floor(Math.random() * 100);
  slider.setValue(randomValue);
})

rootLayout.addWidget(label);
rootLayout.addWidget(slider);
rootLayout.addWidget(button);
win.setCentralWidget(centralWidget);
win.setStyleSheet(
  `
    #root {
      background-color: #fff;
      height: '100%';
      padding: 10px;
    }
    #label {
      font-size: 16px;
      font-weight: bold;
      padding: 1;
      color: #000;
    }
    #slider {
      margin: 8px 0;
    }
    #button {
      font-size: 16px;
      background: #eee;
      color: #000;
      margin: 1px;
    }
  `
);
win.show();

(global as any).win = win;
