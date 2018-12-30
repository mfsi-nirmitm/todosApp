package com.todos.rest.webservices.restfullwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU0Njc1MjE1NiwiaWF0IjoxNTQ2MTQ3MzU2fQ.aPKu3MNG3Ax8TSWmdCOX7p6Uzwc3hrWlKpkH_6UhgZdFB8XojWFDUhwr3X07YxWL4hInph48dcmjSqx2PoCGQA"
//    }


    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

