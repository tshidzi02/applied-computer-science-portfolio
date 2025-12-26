/*
HOW TO COMPILE AND RUN THIS FILE (PowerShell):
---------------------------------------------
javac NumberGuessGame.java
java NumberGuessGame
*/

import java.util.Scanner;

public class NumberGuessGame {
    public static void main(String[] args) {
        int secret = 7;
        int guess = -1;
        Scanner scanner = new Scanner(System.in);

        while (guess != secret) {
            System.out.print("Guess the number: ");
            guess = scanner.nextInt();

            if (guess < secret) {
                System.out.println("Too low!");
            } else if (guess > secret) {
                System.out.println("Too high!");
            }
        }

        System.out.println("Correct!");
        scanner.close();
    }
}
