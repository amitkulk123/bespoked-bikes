public class Products {
    private String name;
    private String manufacturer;
    private String style;
    private double purchasePrice;
    private double salesPrice;
    private int quantity;
    private double commission;

    public Products() {
        this.name = null;
        this.manufacturer = null;
        this.style = null;
        this.purchasePrice = 0;
        this.salesPrice = 0;
        this.quantity = 0;
        this.commission = 0;
    }

    public Products(String name, String manufacturer, String style, double purchasePrice, double salesPrice, int quantity, double commission) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.style = style;
        this.purchasePrice = purchasePrice;
        this.salesPrice = salesPrice;
        this.quantity = quantity;
        this.commission = commission;
    }

    public String toString() {
        String desc = "";
        
        desc += "Printing report for " + name + "\n"; 
        desc += "Manufacturer " + manufacturer + "\n";
        desc += "Style " + style + "\n";
        desc += "Purchase Price " + purchasePrice + "\n";
        desc += "Sales Price " + salesPrice + "\n";
        desc += "Quantity " + quantity + "\n";
        desc += "Commission " + commission + "\n";

        return desc;
    }
}