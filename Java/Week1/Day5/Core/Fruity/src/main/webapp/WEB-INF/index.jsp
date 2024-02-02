<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>

<!DOCTYPE html>
<html>
<head>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<div class="container">
  <h2 class="text-danger">Fruit Store</h2>
  <table class="table">
    <thead>
      <tr>

        <th>Name</th>
        <th>prices</th>
      </tr>
    </thead>
    <tbody>
    <c:forEach var="oneFruit" items="${fruits }">
    
      <tr>
        <td>${oneFruit.name}</td>
        <td>${oneFruit.price}</td>
      </tr> 
       </c:forEach>
      
    
    </tbody>
  </table>
</div>


</body>
</html>