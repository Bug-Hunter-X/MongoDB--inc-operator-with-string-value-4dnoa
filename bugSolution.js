```javascript
// Correct usage of $inc operator in MongoDB update query
db.collection.updateOne({ name: "John" }, { $inc: { age: 10 } });
```