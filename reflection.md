*Code Quality Requirements*

**Chapter 2 - Meaningful Names**

| Name and explanation | Reflection and rules from Clean Code |
|---|---|
|**countPeriods:** This is a function that counts the amount of periods used in a block of code. | **Use Intention-Revealing Names:** <br> According to Clean Code, we should choose names that tell us why a function/class exists. In this case, the name of the function clearly states what it does. It counts periods. <br> **Method Names:** Clean Code mentions that methods should have verbs or verb phrase names. In this case, we have “count” in the name and therefore follow this rule.|
|**calculateAverageWordLenght:** This function goes through the block of code and calculates the average length of the words used.  | **Use Searchable Names:** It’s important to have function names that can be easily searched when working on a project. Using single-letter words or just a number can make it very difficult to find what we’re looking for when searching our code. In this case, we have a long function name, and at first glance, we might think it’s all good. But in this project, we also have two other functions that start with “calculate”. This is a small project and it’s still easy to search, but if it was a bigger project with lots of functions starting with the same verb there would be problems. |
|**wordFrequency:** This function calculates how often a word has been used. It will give us the word and a number that shows us how many times it was used in the text block.  |**Avoid Disinformation:** *“We should avoid words whose entrenched meanings vary from our intended meaning.”* The problem with this function name is that it might be a bit too vague. What I mean by that is that it might not outright communicate disinformation, but it could be misinterpreted and because of that it could lead to disinformation. Word frequency could be more than one thing.  |
|**wordMap = {}** This is a const used in the wordFrequency function. This is where we put the word and a number representing how many times it was used   |**Add Meaningful Context:** Sometimes we just assume that the names we pick are going to be as clear to others as they are to ourselves. The book mentions that it’s important to place names in context for the reader. We do this by enclosing the names in well-named classes, methods and so on. Here we have the variable wordMap and we know it’s an object. The function we see it in is called wordFrequency. The variable stores the name and the amount of times it is used and therefore we can kind of see it as a map over the word. So in this context I think it is clear and understandable. |
|**letterToCount:** This is a variable used when we add an eventListener to a button that counts how many times a specific letter was used in the text block that has been provided.  |**Use Intention-Revealing Names:** Earlier we saw this rule on a function but here it is used on a variable as well. This variable is connected to an event listener where we count how many times one specific letter was used. It is clear what the variable is referring to. <br> **Add Meaningful Context:** This is in my opinion the variable in it’s context is very fitting and therefore this rule is clearly followed as well.  |

***My reflection on the chapter Meaningful Names:***

My first reflection after reading the chapter was that you have to be as clear as possible and imagine that anyone should be able to look at your code and understand. Even if they have none or almost no understanding of the project the names should be so clear they should still be understood. Of course, this is sometimes hard and if we have a bigger project we might not be able to write code that a complete outsider could understand. But my takeaway is that if I can be stupidly clear, I should.

The very first two rules we get introduced to in the chapter, **Use Intention-Revealing Names** and **Avoid Disinformation** are such important things to keep in mind and an excellent way of starting this chapter off. If we only have these two rules in our knowledge backpacks we are going to do very well for a long time. These should always be on our minds when we name our code. If we follow these rules we will almost automatically also follow the **Don’t Be Cute** rule. Because we won’t be naming our methods “stupid funny things”, because if we do, well the first two rules won’t be followed.

Reading this chapter, a lot of things felt obvious, as long as we’re smart and think one step further we will do good. Something I hadn't thought about before but it makes sense is the **Don’t Add Gratuitous Context** rule. The example provided in the book is an application called “Gas Station Delux” and by adding the prefix GSD to all the classes a lot of unnecessary struggle. This would break the **Use Searchable Names** rule because when we try to search for a class all the classes will start with the same prefix and therefore make it very difficult to search for specific classes.

**Chapter 3- Functions**
|Function Name   |Number of Lines   | Reflection|
|---|---|---|
|**createWordCloud(text)**   |**38**   |**Do One Thing** is one of the first rules mentioned in the book and for this function, I think this rule is followed and not followed. It does one thing. It creates a word cloud. Is this a big function? Yes, it could most likely be divided. One one line I clear the previous content of the word cloud and sure, that could be it’s own function. But I still think this function does one thing. But the one thing that it does is not a simple word count and therefore it’s going to be a bigger function.<br>**The Stepdown Rule** means we want the code to be read from top to bottom. The beginning of the function should be at the top and when we’re done doing whatever the function is doing we should have arrived at the bottom. In this function we start by taking wordFrequency function and putting that into a variable called wordMap, we then clear the previous content, and then we start building our word cloud. At the end, we add our cloud. So in my opinion we do follow this rule.   |
|**sortWordFrequency(text)**   |**27**   |**Verbs and Keywords**, this paragraph tells us about the importance of good names in order to explain the intent of our functions. In this project there already is a function called wordFrequency() and right after that function we find this one. The name clearly states that its job is to sort the word frequency. <br> **Function Arguments**, the book mentions that the ideal number of arguments is zero. Having one argument is still fine and even two can be ok. three or more should be avoided according to the book. In this function and the majority of the functions in this project the arguments are just one.   |
|**calculateMinimumWordLength(text)**   |**16**   |**Use Descriptive Names** this rule really goes hand in had with the previous chapter about naming. I’m mentioning it here because I think this function, and the next function in the table, really follow it. They clearly state what they’re doing and anyone programmer or not can understand what they do. The book encourages us to make long names if that means the name is going to be more descriptive and that is what I have done with this function.   |
|**calculateMaximumWordLength(text)**   |**16**   |**Do One Thing**, I would say that this rule is absolutely followed here. It calculates the maximum word length from the words in a text.   |
|**wordFrequency(text)**   |**12**   |**Small!** This is the first rule we encounter in this chapter and it is the backbone of the rest of the chapter. This function and the once above are probably not considered small enough. Looking at this specific function there are probably ways of making it smaller. But then again it’s the smallest of my ”big” functions and I would also say it followes the **Do One Thing** rule.   |

**My reflection on the chapter *Functions:***
I’m not going to lie, I think this chapter is very extreme. I agree that functions/methods should be small and that they should do one thing only. But sometimes it’s very hard to follow these rules to the extreme of this book. I also think starting a paragraph with *“Try/catch blocks are ugly…”* probably isn’t the most professional way to get one’s point across. And I just don’t personally think they confuse the code structure.

Another thing I found very extreme was the approach to the amount of arguments that “should” be used. Of course, the more we use the more we risk causing confusion and potential wrongs to be made. But most of the arguments the author makes for zero or one argument only is that it’s easy to misread, that he has to read something twice to understand. And I just don’t think this is enough to write a rule about it. As programmers, we have to be cautious and be aware that we might misread because we’re stressed or just quick readers.

As I mentioned I agree that our functions should do one thing the paragraph **Have No Side Effects** mentions that side effects are lies and that our functions shouldn’t do hidden things. There is an example of a class called UserValidator where a user's password gets checked BUT the class also calls Session.initialize(). So it doesn’t do ONE thing, it does two. The book also mentions that error handling should always be separate because that is a thing in itself. I have written methods where I have error-handling baked into it and sometimes I do think it makes sense even though I in this case will be breaking the **Do One Thing** rule.

This chapter is extreme, but in giving this extremely clean philosophy it helped me see how I sometimes put more things than I should in my functions, and how things can get dragged out with ifs, switches and so on. I don’t know if I will ever be able to 100 follow this book’s rules, but they will definitely help me clean up my code in the future.

**My reflection on the lab:***
As I have mentioned before I have learned a lot from reading these chapters and I think I did good even before I read them. Naming my variables and methods well is something I try really hard to do because I know that if I don’t I will confuse myself. I really related to the **Use Intention-revealing Names** and **Avoid Disinformation** rules. These should be built into our programmer brains for our own sake and for our future colleagues. Following these two will in my opinion force us to also follow the **Do One Thing** rule and this will lead to smaller functions.

I have some longer functions in my code and I really think it’s hard to make them as minimal as the author of this book wants us to make them. This is where I start to disagree on some points with the author. But, looking at my code from this project I think I did a good job in keeping my functions as small as possible. Of course, there are always ways to break things out and make other functions, erase things, and re-write things. But all in all, I think I did a good job.

The same goes with the naming of my functions and variables. I try to make it stupid proof for myself and try to be as obvious as I can. I truly believe and agree with the author of Clean Code that sometimes we need to make the names longer. Using single letters or numbers is going to be confusing to myself in 5 minutes when I have looked away from my code and have to come back. I can only imagine coming into a project where prefixes and short names or “project-specific-insider-names” are the norm, it would take so long to get into the swing of things, time that could have been put into the project.  
  
On an ending note, this was a very good exercise in code quality and even if we think we’re doing a good job as is, there are always ways to improve. Even though I think this author takes it to the extreme sometimes.