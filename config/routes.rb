# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#             edit_api_user GET    /api/users/:id/edit(.:format)                                                            api/users#edit {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
#               api_reviews GET    /api/reviews(.:format)                                                                   api/reviews#index {:format=>:json}
#                           POST   /api/reviews(.:format)                                                                   api/reviews#create {:format=>:json}
#           edit_api_review GET    /api/reviews/:id/edit(.:format)                                                          api/reviews#edit {:format=>:json}
#                api_review GET    /api/reviews/:id(.:format)                                                               api/reviews#show {:format=>:json}
#                           PATCH  /api/reviews/:id(.:format)                                                               api/reviews#update {:format=>:json}
#                           PUT    /api/reviews/:id(.:format)                                                               api/reviews#update {:format=>:json}
#                           DELETE /api/reviews/:id(.:format)                                                               api/reviews#destroy {:format=>:json}
#            api_businesses GET    /api/businesses(.:format)                                                                api/businesses#index {:format=>:json}
#                           POST   /api/businesses(.:format)                                                                api/businesses#create {:format=>:json}
#         edit_api_business GET    /api/businesses/:id/edit(.:format)                                                       api/businesses#edit {:format=>:json}
#              api_business GET    /api/businesses/:id(.:format)                                                            api/businesses#show {:format=>:json}
#                           PATCH  /api/businesses/:id(.:format)                                                            api/businesses#update {:format=>:json}
#                           PUT    /api/businesses/:id(.:format)                                                            api/businesses#update {:format=>:json}
#                           DELETE /api/businesses/:id(.:format)                                                            api/businesses#destroy {:format=>:json}
#                     users GET    /users(.:format)                                                                         users#index
#                  new_user GET    /users/new(.:format)                                                                     users#new
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: { format: :json } do
      resources :users, except: [:new]
      resources :reviews, except: [:new]
      resources :businesses, except: [:new]
      resource :session, only:[:create,:destroy]
  end

  # resources :users, only:[:index]

  root to: "static_pages#root"
end
