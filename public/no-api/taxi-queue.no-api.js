document.addEventListener('alpine:init', () => {

    Alpine.data('TaxiQueue', () => {

        return {
            version: 'no-api-1.0',
            
            init(){
                this.numPassangers;
                this.numTaxis;
            },

            numPassangers: 0,
            numTaxis: 0,

            joinQueue() {
                this.numPassangers += 1;
            },


            leaveQueue() {
                if(this.numPassangers > 0){
                    this.numPassangers -= 1;
                }
                
            },

            joinTaxiQueue() {
                this.numTaxis += 1
            },

            queueLength() {
                return this.numPassangers;
            },

            taxiQueueLength() {
                return this.numTaxis;
            },

            taxiDepart() {
                if(this.numTaxis > 0 && this.numPassangers >=12 ){
                    
                    this.numTaxis -= 1;
                    this.numPassangers -= 12;
                }
            }

            
        }

    });

});


