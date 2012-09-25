(ns testproj
  (:use [domina.css :only [sel]]
        [domina.events :only [listen! target]]
        [domina :only [log]]))

(defn ^:export init []
  (listen! (sel "a.delete") :click
           (fn [evt]
             (log (target evt)))))