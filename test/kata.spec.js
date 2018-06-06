describe("SurvivorGame", function () {
	describe("play",function(){
		it("Given 1 person, expect it is survior", function() {
			// arrange
			let totalPeople = 1;
			let stepSize = 3;
			let game = new SurvivorGame();
			// act
			let actual = game.play(totalPeople,stepSize);
			// assert
			expect(actual).toBe(1);
		});
		it("Given 2 person with step size 1, 2nd person survivor", function() {
			// arrange
			let totalPeople = 2;
			let stepSize = 1;
			let game = new SurvivorGame();
			// act
			let actual = game.play(totalPeople,stepSize);
			// assert
			expect(actual).toBe(2);
		});
		it("Given 3 person with step size 1, 1st person survivor", function() {
			// arrange
			let totalPeople = 3;
			let stepSize = 1;
			let game = new SurvivorGame();
			// act
			let actual = game.play(totalPeople,stepSize);
			// assert
			expect(actual).toBe(3);
		});
		it("Given 3 person with step size 2, 1st person survivor", function() {
			// arrange
			let totalPeople = 3;
			let stepSize = 2;
			let game = new SurvivorGame();
			// act
			let actual = game.play(totalPeople,stepSize);
			// assert
			expect(actual).toBe(3);
		});
	});
});
