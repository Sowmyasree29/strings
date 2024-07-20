str=prompt("enetr any string:")
vowels="aeiouAEIOU",vow="",cons="",res=""
for(i of str)
{
    if(i!=" ")
    {
        if(vowels.includes(i))
        {
            vow+=i
        }
        else
        {
            cons+=i
        }
    }
}
len=(vow.length>cons.length)?vow.length:cons.length
for(i=0;i<len;i++)
{
    if(vow[i]!=undefined)
    {
        res+=vow[i]
    }
    if(cons[i]!=undefined)
    {
        res+=cons[i]
    }
}
console.log(res)

// output

// enetr any string:I am Good
// ImaGodo

str=prompt("enter any string:")
res=""
for(i of str)
{
    if(i==i.toUpperCase())
    {
        res+=i.toLowerCase()
    }
    else
    {
        res+=i.toUpperCase()
    }
}
console.log(res)

// output

// enter any string:I am GOod
// i AM goOD

