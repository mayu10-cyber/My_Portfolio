import java.awt.*;
import java.awt.event.*;

public class AWTCheckboxExample {

    AWTCheckboxExample() {
        // Creating a new frame
        Frame frame = new Frame("AWT Checkbox Example");

        // Creating checkboxes
        Checkbox cb1 = new Checkbox("Java");
        Checkbox cb2 = new Checkbox("Python");
        Checkbox cb3 = new Checkbox("C++");

        // Setting positions of checkboxes
        cb1.setBounds(50, 50, 100, 30);
        cb2.setBounds(50, 100, 100, 30);
        cb3.setBounds(50, 150, 100, 30);

        // Adding checkboxes to the frame
        frame.add(cb1);
        frame.add(cb2);
        frame.add(cb3);

        // Setting frame size and layout
        frame.setSize(300, 300);
        frame.setLayout(null);
        frame.setVisible(true);

        // Adding window closing event
        frame.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                frame.dispose();
            }
        });
    }

    public static void main(String[] args) {
        // Run the GUI code in the AWT event dispatching thread (optional but good practice)
        new AWTCheckboxExample();
    }
}
