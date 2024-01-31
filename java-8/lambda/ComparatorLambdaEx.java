package com.learnJava.lambda;
import java.util.Comparator;

public class ComparatorLambdaEx {
    public static int compareTwoIntegers(Comparator<Integer> comparator, int a, int b){

        return comparator.compare(a,b);
    }

    public static void main(String[] args) {

        //before java-8
        Comparator<Integer> comparator  = new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o1.compareTo(o2); // 0 -> if both are equal
                // 1 -> if o1 > o2
                //-1 -> if o1<o2
            }
        };

        System.out.println(comparator.compare(1,2));

        // java-8...using lambda
        Comparator<Integer> comparatorLambda = (Integer  a,Integer b) -> a.compareTo(b);
        Comparator<Integer> comparatorLambda1 = (a,b) -> a.compareTo(b);

        System.out.println(comparatorLambda.compare(1,2));




    }
}
