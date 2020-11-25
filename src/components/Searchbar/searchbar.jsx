import React from 'react';
import './searcbar.css';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            term: '',
            location: '',
            sortBy: 'best_match'
        };
         
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this)

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count',
        };
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy == sortByOption ) {
            return 'active'
        } else {return ''}
        // css class to selected element
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy : sortByOption})
        // what to sort by
    }

    handleTermChange(event){
        this.setState({term: event.target.value})
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value})
    }

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
        event.preventDefault() /* so button won't reload the page */
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
        // returns Best Match, Highest Rated and Most Reviewed from state object and MAP them (3 objs)
            let sortByOptionValue = this.sortByOptions[sortByOption];
        // returns what values are assigned to names of obj,keys (best_match,rating,review_count)
            return <li key={sortByOptionValue}   /* returns 3 <li>'s */
                       className={this.getSortByClass(sortByOptionValue)}
                       onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                >{sortByOption}</li>
        })
    }

    render() {
        return(
        <div className = "SearchBar" >
        <div className="SearchBar-sort-options">
            <ul>
                {this.renderSortByOptions()}
            </ul>
        </div>
        <div className="SearchBar-fields">
            <input placeholder="Search Businesses" onChange={this.handleTermChange} />
            <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
            <a onClick={this.handleSearch}>Let's Go</a>
        </div>
        </div>
        )
    }
};

export default Searchbar