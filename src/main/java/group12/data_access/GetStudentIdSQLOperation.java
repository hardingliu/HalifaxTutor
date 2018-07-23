package group12.data_access;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class GetStudentIdSQLOperation extends SQLOperationTemplate {
    public GetStudentIdSQLOperation(Object... parameters) {
        super(parameters);
    }

    @Override
    String makeSQL() {
        return "CALL GetStudentId(?)";
    }

    @Override
    PreparedStatement addParameters(PreparedStatement ps) throws SQLException {
        String email = (String) getParameters().get(0);
        ps.setString(1, email);
        return ps;
    }

    @Override
    Object extractResultSet(ResultSet rs) throws SQLException {
        StudentParser studentParser = new StudentParser();
        Student student = studentParser.parse(rs);
        return student;
    }

    @Override
    ResultSet execute(PreparedStatement ps) throws SQLException {
        ps.execute();
        return ps.getResultSet();
    }
}