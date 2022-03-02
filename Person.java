public class Person {
    private String firstName;
    private String lastName;
    private String address;
    private String phoneNum;
    private String startDate;

    public Person() {
        firstName = null;
        lastName = null;
        address = null;
        phoneNum = null;
        startDate = null;
    }

    public Person(String firstName, String lastName, String address, String phoneNum, String startDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNum = phoneNum;
        this.startDate = startDate;
    }

    public String toString() {
        String desc = "";
        
        desc += "Printing report for " + firstName + " " + lastName + "\n"; 
        desc += "Address " + address + "\n";
        desc += "Phone Number " + phoneNum + "\n";
        desc += "Start Date " + startDate + "\n";

        return desc;
    }
}