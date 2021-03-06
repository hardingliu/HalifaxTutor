package group12.dataaccess;

import java.sql.ResultSet;
import java.sql.SQLException;

public class StudentParser {
    public Student parse(ResultSet rs) throws SQLException {
        Student student = new Student();
        student.setEmail(rs.getString("Email"));
        student.setPassword(rs.getString("Password"));
        student.setStudentID(rs.getInt("ID"));
        student.setFirstName(rs.getString("FirstName"));
        student.setLastName(rs.getString("LastName"));
        student.setActivated(rs.getBoolean("AccountActivation"));
        student.setBanned(rs.getBoolean("Banned"));
        student.setPhoneNumber(rs.getString("PhoneNumber"));
        return student;
    }
}
