class employee{
    void calsal(){
        System.out.println("Employee salary is calculated");
    }
}
class hr extends employee{
    @Override
    void calsal(){
        double month = 45000.0;
        System.out.println("Hr salary is " + month );
    }
}
class intern extends employee{
    @Override
    void calsal(){
        int month = 12000;
        System.out.println("intern salary per year: "+(month*12) ); 
    }
}
public class override {
    public static void main(String[]args){
        employee emp=new employee();
        emp.calsal();
        emp=new hr();
        emp.calsal();
        emp=new intern();
       // emp.calsal(); 
    }
    
}
    
