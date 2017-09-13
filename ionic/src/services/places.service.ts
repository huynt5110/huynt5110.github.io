export class PlacesService {
    private places: {
        title: string
    }[] = [];
    addPlace(place: {title: string}) {
        this.places.push(place);
        return "true";
    }
    getPlaces() {
        return this.places.slice();
    }
    removePlaces(index) {
        this.places.splice(index, 1);
    }
}