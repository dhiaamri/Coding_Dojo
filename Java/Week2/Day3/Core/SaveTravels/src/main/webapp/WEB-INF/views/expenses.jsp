<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <title>Save Travels</title>
</head>
<body>
<h2>Expense List</h2>
<table id="expenseTable">
    <thead>
    <tr>
        <th>Expense Name</th>
        <th>Vendor</th>
        <th>Amount</th>
        <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach var="expense" items="${expenses}">
        <tr>
            <td><a href="<c:url value='/expenses/${expense.id}'">${expense.name}</a></td>
            <td>${expense.vendor}</td>
            <td>${expense.amount}</td>
            <td>
                <a href="<c:url value='/expenses/edit/${expense.id}'">Edit</a>
                <a href="<c:url value='/expenses/delete/${expense.id}'" onclick="return confirm('Are you sure?')">Delete</a>
            </td>
        </tr>
    </c:forEach>
    </tbody>
</table>

<!-- Add Expense Form -->
<h2>Add Expense</h2>
<form:form modelAttribute="expense" action="<c:url value='/expenses/add' />" method="post">
    <form:label path="name" for="name">Name:</form:label>
    <form:input path="name" required="true"/>

    <form:label path="vendor" for="vendor">Vendor:</form:label>
    <form:input path="vendor" required="true"/>

    <form:label path="amount" for="amount">Amount:</form:label>
    <form:input path="amount" type="number" step="0.01" required="true"/>

    <form:label path="description" for="description">Description:</form:label>
    <form:input path="description"/>

    <button type="submit">Save</button>
</form:form>
</body>
</html>
