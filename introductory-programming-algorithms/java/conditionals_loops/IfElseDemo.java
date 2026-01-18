/*
HOW TO COMPILE AND RUN THIS FILE (PowerShell):
---------------------------------------------
javac IfElseDemo.java
java IfElseDemo
*/

import java.util.Scanner;

public class IfElseDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        if (age >= 18) {
            System.out.println("You are eligible to vote.");
        } else {
            System.out.println("You are not eligible to vote yet.");
        }

        scanner.close();
    }
}
