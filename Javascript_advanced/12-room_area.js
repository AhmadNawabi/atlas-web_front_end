const roomDimensions = {
    width: 50,
    length: 100,
    gerArea: function () {
        return this.width * this.length;
    }
};

const boundGetArea = roomDimensions.gerArea.bind(roomDimensions);

console.log(boundGetArea());
