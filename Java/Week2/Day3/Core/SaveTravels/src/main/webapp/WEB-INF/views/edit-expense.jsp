<%--
  Created by IntelliJ IDEA.
  User: Anisr
  Date: 03/02/2024
  Time: 17:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Edit Expense</title>
</head>
<body>
<h2>Edit Expense</h2>

<form:form modelAttribute="expense" action="<c:url value='/expenses/edit/${expense.id}' />" method="post">
    <label for="name">Name:</label>
    <form:input path="name" required="true"/>

    <label for="vendor">Vendor:</label>
    <form:input path="vendor" required="true"/>

    <label for="amount">Amount:</label>
    <form:input path="amount" type="number" step="0.01" required="true"/>

    <label for="description">Description:</label>
    <form:input path="description"/>

    <button type="submit">Update</button>
</form:form>

<a href="<c:url value='/expenses' />">Back to Expenses</a>
</body>
</html>
