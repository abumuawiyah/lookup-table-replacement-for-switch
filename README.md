# lookup-table-replacement-for-switch

####Tired with switch?

####Tired with unreadable if-else if-else?

####Use lookup table!!

<pre><code>
var lookup = function(){                        
    return ({
        '0': 1,
        '1': 1,
        '2': 1,
        '3': 1,
        '4': 1,
        '5': 1,
        get: function(index){
          return this[index]();
        }
    }).get(index);
}();
</code></pre>

Reference:
1. <b>Todd Motto</b> : https://toddmotto.com/deprecating-the-switch-statement-for-object-literals/
2. <b>Stoyan Stefanov</b> - Immediate Object Initialization
