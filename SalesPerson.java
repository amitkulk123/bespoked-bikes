public class SalesPerson extends Person {
    private String terminationDate;
    private String manager;

    public SalesPerson(String firstName, String lastName, String address, String phoneNum, String startDate, String terminationDate, String manager) {
        super(firstName, lastName, address, phoneNum, startDate);
        this.terminationDate = terminationDate;
        this.manager = manager;
    }

    public String toString() {
        return super.toString() + "\n" + "Termination Date: " + terminationDate + "\n" + "Manager: " + manager;

    }
}