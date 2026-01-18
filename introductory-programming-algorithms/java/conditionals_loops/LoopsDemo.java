/*
HOW TO COMPILE AND RUN THIS FILE (PowerShell):
---------------------------------------------
javac LoopsDemo.java
java LoopsDemo
*/

public class LoopsDemo {
    public static void main(String[] args) {

        System.out.println("For loop:");
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }

        System.out.println("\nWhile loop:");
        int count = 1;
        while (count <= 5) {
            System.out.println(count);
            count++;
        }
    }
}
