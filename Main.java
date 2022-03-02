import java.util.*;

public class Main {
    public static void main(String[] args) {
        // System.out.println("Enter an input");

        Scanner scan = new Scanner(System.in);

        
        // System.out.println("You entered " + out);
        boolean addNew = true;
        while(addNew) {
            ArrayList<SalesPerson> list = new ArrayList<>();


            System.out.println("Would you like to add a new salesperson?");
            System.out.println("0 for false");
            if(scan.nextInt() == 0) {
                addNew = false;
            }

            
        }



        SalesPerson person = new SalesPerson("Amit", "Kulkarni", "11605 Vista Forest Drive Alpharetta, GA 30005", "404-952-4267", "02/28/22", "2/29/22", "Bob Ross");
        System.out.println(person);

    }
}