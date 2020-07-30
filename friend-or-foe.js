function friend(friends){
  
    let newFriends = [];
    
    for (i = 0; i < friends.length; i++){
      
      if(friends[i].length == 4){
        newFriends.push(friends[i]);
  
      }
        
    }
    
    return newFriends;
  }