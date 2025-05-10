# Worker Thread  
: lightweight threads within the same process.

Another way of parallel processing with the help of threads , on the same instances.
- same process mai thread hai to memory bhi uski hi use karega
- offload CPU-intensive to this thread

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*qsSnKuW026FXqANJxD8PIw.jpeg)

```
```

✅ Pros:
- child_process se fast hota hai kyuki main process se hi connected hai 
- extra memory nhi lagti , shared se kaam ho jata hai.

❌ Cons:
- isolation nhi milta tasks ko 
- CPU vale kaam hi kar pata hai 