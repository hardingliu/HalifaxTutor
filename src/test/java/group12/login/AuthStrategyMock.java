package group12.login;

import group12.dataaccess.User;

public class AuthStrategyMock implements IAuthenticationStrategy {
    @Override
    public void authenticate(User user) {
        LoginResponse response = new LoginResponse(AuthenticationResult.SUCCESS, "welcome back", "url", "token");
        user.setLoginResponse(response);
    }
}
