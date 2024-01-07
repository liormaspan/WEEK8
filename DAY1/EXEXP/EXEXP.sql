-- 1
-- SELECT * FROM language

-- 2
-- SELECT film.title, film.description,language.name
-- FROM film 
-- INNER JOIN language
-- ON film.film_id = language.language_id

-- 3
-- SELECT film.title, film.description,language.name
-- FROM film 
-- LEFT JOIN language
-- ON film.film_id = language.language_id

-- 4
-- INSERT INTO new_film(name)
-- -- VALUES('training_day');
-- VALUES('friday'),('menace_to_society');

-- 5
-- CREATE table customer_review(
-- review_id serial primary key NOT NULL,
-- film_id integer not null,
-- language_id integer not null,
-- title VARCHAR(50) not null,
-- score integer not null,
-- review_text text,
-- last_update timestamp,

-- constraint fk_language_id foreign key (language_id) references language(language_id),
-- constraint ft_film_id foreign key (film_id) references new_film(id) ON DELETE CASCADE,
-- constraint ft_score_value check (score > 0 AND score <=10)
-- )

-- 6
-- INSERT INTO customer_review(film_id,language_id,title, score, review_text)
-- VALUES(1,1,'Good Movie',10,'one of my favorite movies'),(1,3,'Nice Movie',7,'Chill Movie')

-- 7
-- DELETE FROM new_film 
-- WHERE (name = 'friday')





-- PART II

-- 1
-- UPDATE film
-- SET language_id=1
-- WHERE (title = 'Academy Dinosaur')

-- 2
-- SELECT * FROM customer 
-- WHERE (first_name='lior')
-- INSERT INTO customer(first_name, last_name, store_id, address_id)
-- VALUES('lior','maspan',1,1)

-- 3
-- DROP TABLE customer_review

-- 4
-- SELECT * FROM rental 
-- WHERE (return_date is null)

-- 5
-- SELECT * FROM rental 
-- INNER JOIN inventory ON rental.inventory._id=inventory.inventory_id
-- LEFT JOIN film ON inventory.film_id=film.film_id
-- WHERE rental.return_date IS null
-- ORDER BY film.replacement_cost DESC
-- LIMIT 30

-- 6.1.
-- SELECT film.film_id, film.title, film.fulltext FROM film_actor
-- INNER JOIN film ON film.film_id=film_actor.film_id
-- WHERE(actor_id=(
-- 	SELECT actor_id FROM actor WHERE (first_name ='penelope' AND last_name ='monroe')
-- 	AND film.fulltext @@ to_tsquery('english','sumo')
-- ))

-- 6.2.
-- SELECT * FROM film
-- INNER JOIN film_category ON film.film_id=film_category.film_id
-- INNER JOIN category ON category.category_id=film_category.category_id
-- WHERE length<60 AND rating='R'AND category.name='Decumentary'

-- 6.3.
-- SELECT * FROM inventory
-- INNER JOIN film ON film.film_id=inventory.film_id
-- INNER JOIN rental ON rental.inventory_id=inventory.inventory_id
-- INNER JOIN customer ON customer.customer_id=rental.customer_id
-- WHERE customer.first_name='Matthew'AND customer.last_name='Mahan'
-- AND film.rental_rate>4
-- AND rental.return_date>'2005-07-28'
-- AND rental.return_date<'2005-08-01'

-- 6.4.
-- SELECT * FROM inventory 
-- INNER JOIN film ON film.film_id=inventory.film_id
-- INNER JOIN rental ON rental.inventory_id=inventory.inventory_id
-- INNER JOIN customer ON customer.customer_id=rental.customer_id
-- WHERE customer.first_name='Matthew'
-- AND customer.last_name='Mahan'
-- AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
-- ORDER BY film.replacement_cost DESC
-- LIMIT 1

