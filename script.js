local itemsToSell = {3366, 3414}
macro(651, "Usar Key", function()
local containers = getContainers()
for i, container in pairs(containers) do
for j, item in ipairs(container:getItems()) do
if table.find(itemsToSell, item:getId()) then
useWith(651, item)
end
end
end
end)