export function getDateXDaysAgo(numOfDays: number, date = new Date()) {
    const daysAgo = new Date(date.getTime());
  
    daysAgo.setDate(date.getDate() - numOfDays);
  
    return daysAgo;
  }
  
 export function makeId(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }