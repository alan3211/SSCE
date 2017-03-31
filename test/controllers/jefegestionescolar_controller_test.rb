require 'test_helper'

class JefegestionescolarControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get jefegestionescolar_index_url
    assert_response :success
  end

end
