package com.learnJava.imperativevsdeclarative;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static java.util.stream.Collectors.toList;
public class ImpvsDec2 {
    public static void main(String[] args) {
    List<Integer> integerList =Arrays.asList(1,2,3,4,4,5,5,6,7,7,8,9,9);

    //Imperative
    List<Integer> uniqueList = new ArrayList<>();
        for(Integer i :integerList)
            if(!uniqueList.contains(i)){
        uniqueList.add(i);
    }
        System.out.println("unique List : " + uniqueList);

    //Declarative

    List<Integer> uniqueList1 = integerList.stream()
            .distinct()
            .collect(toList());
        System.out.println("uniqueList1 : " + uniqueList1);
}
}
