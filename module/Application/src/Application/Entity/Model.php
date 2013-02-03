<?php
namespace Application\Entity;
use Doctrine\ORM\Mapping as ORM;


/**
 * Created by JetBrains PhpStorm.
 * User: Андрей
 * Date: 24.01.13
 * Time: 21:35
 * To change this template use File | Settings | File Templates.
 */
class Model
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer", name="uid")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @return array
     *
     * TODO: Переделать как в примере http://stackoverflow.com/questions/8270151/doctrine2-findall-toarray
     * т.к. через get_object_vars могут попасть лишнее переменные, также это не решает вопрос с ассоциативными связями на другие объекты
     */

    public function toArray() {
        return get_object_vars($this);
    }

    public function __get($property) {
        return $this->$property;
    }

}
