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

<meta charset="ISO-8859-1">
<title>Insert title here</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

</head>
<body >
 <form action="/process" method="post" class="form form-control">
        <div class="form-group ">
            <label for="num" class="text-danger">Pick any number:</label>
            <input type="number" id="num" name="num" class="form-control" placeholder="Enter a number">
        </div>

        <div class="form-group">
            <label for="city">Enter the name of the city:</label>
            <input type="text" id="city" name="city" class="form-control" placeholder="Enter a city name">
        </div>

        <div class="form-group">
            <label for="person">Enter the name of any real person:</label>
            <input type="text" id="person" name="person" class="form-control" placeholder="Enter a person's name">
        </div>

        <div class="form-group">
            <label for="hobby">Enter professional endeavor or hobby:</label>
            <input type="text" id="hobby" name="hobby" class="form-control" placeholder="Enter a hobby or profession">
        </div>

        <div class="form-group">
            <label for="thing">Enter any type of living thing:</label>
            <input type="text" id="thing" name="thing" class="form-control" placeholder="Enter a living thing">
        </div>

        <div class="form-group">
            <label for="nice">Say something nice to someone:</label>
            <textarea id="nice" name="nice" class="form-control" rows="4" placeholder="Enter a nice message"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

</body>
</html>