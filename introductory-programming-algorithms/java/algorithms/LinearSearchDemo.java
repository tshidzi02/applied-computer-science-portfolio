/*
HOW TO COMPILE AND RUN THIS FILE (PowerShell):
---------------------------------------------
javac LinearSearchDemo.java
java LinearSearchDemo
*/

import java.util.Scanner;

public class LinearSearchDemo {
    public static void main(String[] args) {
        int[] numbers = {3, 6, 1, 9, 4};
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter number to search for: ");
        int target = scanner.nextInt();

        boolean found = false;
        for (int num : numbers) {
            if (num == target) {
                found = true;
            }
        }

        if (found) {
            System.out.println("Number found.");
        } else {
            System.out.println("Number not found.");
        }

        scanner.close();
    }
}
