(defproject testproj "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [domina "1.0.0"]]
  :plugins [[lein-cljsbuild "0.2.5"]]
  :cljsbuild {:builds [{:source-path "src"
                        :compiler {:output-to "resources/public/out.js"
                                   :output-dir "resources/public/js"
                                   :pretty-print true
                                   :optimizations :advanced}}]})
